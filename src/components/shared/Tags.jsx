const Tags = ({ tags }) => {
    return (
        <ul className="text-sm text-primary-blue mt-2.5">
            {tags.map((tag) => (
                <li key={tag}>#tag</li>
            ))}
        </ul>
    );
};

export default Tags;