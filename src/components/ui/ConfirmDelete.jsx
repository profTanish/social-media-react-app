const ConfirmDelete = ({ name, onConfirm, disabled, onClose }) => {
    return (
      <div className="w-[40rem] flex flex-col gap-5">
        <h3 className="text-xl font-medium">Delete {name}</h3>
        <p className="text-light-2 mb-5">
          Are you sure you want to delete this {name} permanently? This action cannot be undone.
        </p>
  
        <div className="flex justify-end gap-5">
          <button
            className="btn btn-secondary"
            disabled={disabled}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="btn bg-danger-1 hover:bg-danger-2"
            disabled={disabled}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default ConfirmDelete;