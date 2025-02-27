import BlogForm from "./components/BlogForm.jsx";

function App() {
  return (
    <div className="">
      <div className="sticky top-0 bg-white shadow-md z-10">
        <h1 className="text-2xl font-semibold text-center p-4">Add New Blog</h1>
      </div>
      <BlogForm />
    </div>
  );
}

export default App;
