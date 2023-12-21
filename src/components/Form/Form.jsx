import { useState } from "react";
import "./form.css";

export const Form = ({ setContent, contentMap }) => {
  const [val, setVal] = useState("");

  function handleChange(evt) {
    setVal(Number(evt.target.value));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (val > Object.keys(contentMap).length || val <= 0) {
      alert("Invalid Tab Index");
      return;
    }

    for (let i = 0; i < Object.keys(contentMap).length; i++) {
      if (val - 1 === i) {
        setContent(Object.values(contentMap)[i]);
        break;
      }
    }

    setVal("");
  }
  return (
    <form className="flex items-center gap-3 w-full" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={val}
        className="w-9/12 p-3 border-transparent font-medium border-b-2 border-b-slate-300 text-slate-500"
        type="number"
        name="index"
        placeholder="Enter tab index"
        aria-label="Enter tab index"
        required
      />
      <button
        className="
        w-3/12
      bg-[#f2f0f1] 
        px-2 
        py-2 
        font-medium 
      text-black
        transition
        active:scale-95"
        type="submit"
      >
        Change tab
      </button>
    </form>
  );
};
