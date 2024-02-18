import { useState } from "react";

interface ModalInterface {
  name: string;
  id: string;
  initialDescription: string;
  toggleModal: (name?: string, description?: string, id?: string) => void;
}

const Modal = ({name, initialDescription, toggleModal, id}: ModalInterface) => {
  const [description, setDescription] = useState(initialDescription);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(() => e.target.value);
  }
  
  return (
    <div className="fixed inset-0 grid place-content-center bg-gray-300/50">
      <div className="px-8 pt-8 pb-2 bg-white rounded-lg min-width-400">
        <p className="mb-4"><b>Task:</b> {name}</p>
        <p className="font-bold">Description:</p>
        <textarea className="w-full border-2 rounded-md focus:border-2 p-2 resize-none"
          autoFocus name="description" onChange={handleChange} id={name} rows={10} value={description}>
        </textarea>
        <br />
        <div className="flex justify-between my-2">
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5" onClick={() => toggleModal(name, description, id)}>Save</button>
          <button className="border-2 hover:bg-gray-200 font-medium rounded-lg text-sm px-5 py-2.5" onClick={() => toggleModal()}>Cancel</button>
        </div>
      </div>
    </div>
  )
};

export default Modal;
