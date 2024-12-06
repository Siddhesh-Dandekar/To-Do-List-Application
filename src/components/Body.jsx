import ToDoList from "./ToDoList";


function Body() {
    return (
        <main className="w-full">
            <div className=" my-3 bg-lime-400 w-11/12 min-h-screen bg-cover rounded-3xl overflow-hidden flex flex-col m-auto p-5">
                <h1 className="text-5xl anton-sc-regular mb-5  ">DASHBOARD</h1>
                <ToDoList />
            </div>
        </main>
    )
}

export default Body;