const ConfirmDelete = ({ name, onConfirm, disabled }) => {
    return (
      <div className="w-[40rem] flex flex-col gap-5">
        <h3>Delete {name}</h3>
        <p className="text-light-2 mb-5">
          Are you sure you want to delete {name} permanently? This action cannot
          be undone.
        </p>
  
        <div className="flex justify-end gap-5">
          <button className="btn btn-secondary">Cancel</button>
          <button
            className="btn text-danger-1"
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