import "./Mainmenu.css"
const Intro = () => {
  const data = [
    { id: 1, name: "John Doe", age: 25, role: "Developer" },
    { id: 2, name: "Jane Smith", age: 28, role: "Designer" },
    { id: 3, name: "Michael Brown", age: 30, role: "Manager" },
  ];
    return (
      <div>
        {/* Sticky Header */}
        <div style={{ position: "sticky", top: "0px", background: "white",}}>
          <header>
            <h1 style={{ textAlign: "center", padding: "20px", }}>
              Welcome to Home Screen
            </h1>
          </header>
        </div>
  
        {/* Content Section */}
        <div style={{ background: "yellow", padding: "20px", }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...
          </p>
         <image sour />
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>

        </div>
        <div className="container mx-auto mt-5 p-4">
      <table className="w-full border-collapse shadow-lg">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="p-3 border">{item.id}</td>
              <td className="p-3 border">{item.name}</td>
              <td className="p-3 border">{item.age}</td>
              <td className="p-3 border">{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    );
  };
  
  export default Intro;
  