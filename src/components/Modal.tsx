import { useState } from "react";

interface ModalInterface {
  name: string;
  initialDescription: string;
  toggleModal: (name?: string, description?: string) => void;
}

const Modal = ({name, initialDescription, toggleModal}: ModalInterface) => {
  const [description, setDescription] = useState(initialDescription);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(() => e.target.value);
  }
  
  return (
    <div className="fixed inset-0 grid place-content-center bg-gray-300/50">
      <div className="p-8 bg-white rounded-md">
        <p className="mb-4"><b>Task:</b> {name}</p>
        <p className="font-bold">Description:</p>
        <textarea className="w-full border-2 rounded-md focus:border-2 p-2 resize-none" autoFocus name="description" onChange={handleChange} id={name} rows={10} value={description}></textarea>
        <br />
        <div className="flex justify-between">
          <button className="font-bold" onClick={() => toggleModal(name, description)}>Save</button>
          <button className="font-bold" onClick={() => toggleModal()}>Cancel</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;