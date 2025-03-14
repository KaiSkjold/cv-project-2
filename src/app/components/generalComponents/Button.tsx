export const Button = (text: {text:string}) => {
    const btnTxt = text.text;
    const handleClick = () => {
        console.log("Button clicked");
    };
    return (
        <div className="flex justify-center">
        <button className="bg-blue-950 text-amber-400 p-4 m-6 rounded-lg hover:cursor-pointer" onClick={handleClick}>{btnTxt}</button>
        </div>
    );
};