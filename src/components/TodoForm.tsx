import React, { useRef } from "react";

interface ITodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<ITodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setTitle(event.target.value);
  // };
  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // console.log(title);
      // setTitle('');
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        //onChange={changeHandler}
        onKeyPress={keyPressHandler}
        //value={title}
        placeholder="Что сделать"
        id="title"
        type="text"
      />
      <label htmlFor="title" className="active">
        Что сделать
      </label>
    </div>
  );
};
