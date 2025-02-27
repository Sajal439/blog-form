import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [subTitles, setSubTitles] = useState([]);
  const [subContents, setSubContents] = useState([]);

  const addSubTitle = () => {
    setSubTitles([...subTitles, ""]);
  };

  const addSubContent = () => {
    setSubContents([...subContents, ""]);
  };

  const updateSubTitle = (index, value) => {
    const updatedSubTitles = [...subTitles];
    updatedSubTitles[index] = value;
    setSubTitles(updatedSubTitles);
  };

  const updateSubContent = (index, value) => {
    const updatedSubContents = [...subContents];
    updatedSubContents[index] = value;
    setSubContents(updatedSubContents);
  };
  const deleteSubTitle = (index) => {
    const updatedSubTitles = [...subTitles];
    updatedSubTitles.splice(index, 1);
    setSubTitles(updatedSubTitles);
  };
  const deleteSubContent = (index) => {
    const updatedSubContents = [...subContents];
    updatedSubContents.splice(index, 1);
    setSubContents(updatedSubContents);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      content,
      subTitles,
      subContents,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 space-y-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="block text-md font-medium text-gray-700"
        >
          Main Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-gray-500 block w-full rounded-md shadow-sm h-10 p-2"
          required
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Sub-Titles</h3>
        {subTitles.map((subTitle, index) => (
          <div key={`subtitle-${index}`} className="space-y-1">
            <input
              type="text"
              value={subTitle}
              onChange={(e) => updateSubTitle(index, e.target.value)}
              placeholder={`Sub-title ${index + 1}`}
              className="block w-full rounded-md border-gray-300 shadow-sm h-10 p-2"
            />
            <button
              type="button"
              onClick={() => deleteSubTitle(index)}
              className="p-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition transform hover:scale-105"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSubTitle}
          className="px-3 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition transform hover:scale-105"
        >
          Add Sub-title
        </button>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="block text-md font-medium text-gray-700"
        >
          Main Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
          required
        ></textarea>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">Sub-Contents</h3>
        {subContents.map((subContent, index) => (
          <div key={`subcontent-${index}`} className="space-y-1">
            <textarea
              value={subContent}
              onChange={(e) => updateSubContent(index, e.target.value)}
              placeholder={`Sub-content ${index + 1}`}
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm p-2"
            ></textarea>
            <button
              type="button"
              onClick={() => deleteSubContent(index)}
              className="p-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition transform hover:scale-105"
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSubContent}
          className="px-3 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition transform hover:scale-105"
        >
          Add Sub-content
        </button>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition transform hover:scale-105"
        >
          Submit Blog
        </button>
      </div>
    </form>
  );
}
