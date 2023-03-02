import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterStatusChange,
  filterColorChange,
} from "../redux/filters/actions";

const statusList = ["All", "Complete", "Incomplete"];

const colorList = (filterColorList = []) => {
  const list = [
    {
      colorName: "green",
      className: `h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
        filterColorList.includes("green") && "bg-green-500"
      }`,
    },
    {
      colorName: "red",
      className: `h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
        filterColorList.includes("red") && "bg-red-500"
      }`,
    },
    {
      colorName: "yellow",
      className: `h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
        filterColorList.includes("yellow") && "bg-yellow-500"
      }`,
    },
  ];

  return list;
};

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const todosRemaining = todos?.filter((todo) => !todo.completed)?.length || 0;

  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;

  const dispatch = useDispatch();

  const handleStatusChange = (status) => {
    dispatch(filterStatusChange(status));
  };

  const handleColorFilter = (color) => {
    const changeType = colors.includes(color) ? "removed" : "added";
    dispatch(filterColorChange(color, changeType));
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{todosRemaining} tasks left</p>
      <ul className="flex space-x-1 items-center text-xs">
        {/* STATUS */}
        {statusList.map((statusItem, index) => (
          <Fragment key={statusItem + index}>
            <li
              onClick={() => handleStatusChange(statusItem)}
              className={`cursor-pointer ${
                filters.status === statusItem && "font-bold"
              }`}
            >
              {statusItem}
            </li>
            {index < statusList.length - 1 ? <li>|</li> : <li></li>}
          </Fragment>
        ))}

        <li></li>

        {/* COLOR */}
        {colorList(colors).map((colorItem, index) => (
          <li
            onClick={() => handleColorFilter(colorItem.colorName)}
            key={colorItem.colorName}
            className={`${colorItem.className}`}
          ></li>
        ))}
      </ul>
    </div>
  );
}
