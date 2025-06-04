"use clint";

export default function Navbar(props) {
    return (
        <>
            <div className="text-black  m-4 hover:text-green-400 cursor-pointer">
                    <h1>{props.name}</h1>
            </div>
        </>
    );
}