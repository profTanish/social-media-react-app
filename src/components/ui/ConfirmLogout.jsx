const ConfirmLogout = ({ onConfirm, disabled, onClose }) => {
    return (
      <div className="w-[40rem] flex flex-col gap-5">
        <h3 className="text-xl font-medium">Logout</h3>
        <p className="text-light-2 mb-5">
          Are you sure you want to sign out? Press Yes to proceed.
        </p>
  
        <div className="flex justify-end gap-5">
          <button
            className="btn btn-secondary"
            disabled={disabled}
            onClick={onClose}
          >
            No
          </button>
          <button
            className="btn bg-primary-blue hover:bg-primary-blue-light"
            disabled={disabled}
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    );
  };
  
  export default ConfirmLogout;