const FormError = ({ errors, fieldName }) => {
    const errorMessage = errors?.[fieldName]?.message;
    if (!errorMessage) return null;

    return <p className="text-danger-1 text-sm">{errorMessage}</p>;
};

export default FormError;