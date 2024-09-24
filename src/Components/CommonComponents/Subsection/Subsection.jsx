

const Subsection = ({title, subTitle}) => {
    return (
        <div className="text-center mb-10">
        <h4 className="text-gray-500">{title}</h4>
        <h1 className="text-5xl font-bold">{subTitle}</h1>
        </div>
    );
};

export default Subsection;