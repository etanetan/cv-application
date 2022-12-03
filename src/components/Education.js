// Import the necessary libraries
import React, { useState } from "react";
import "../styles/main.css";

// Define the Education component
function Education({ education, setEducation }) {
  // Initialize local state to store the values of the input fields
  const [school, setSchool] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Initialize local state to store whether or not the component is in edit mode
  const [isEditing, setIsEditing] = useState(false);
  // Initialize local state to store the index of the item being edited (if any)
  const [editIndex, setEditIndex] = useState(null);

  // Define the function to handle form submissions
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // If no item is being edited, add the new item to the education array
    if (editIndex === null) {
      setEducation([...education, { school, title, date }]);
    }
    // If an item is being edited, update the item in the education array
    else {
      const updatedEducation = [...education];
      updatedEducation[editIndex] = { school, title, date };
      setEducation(updatedEducation);
      setEditIndex(null);
    }

    // Clear the input fields
    setSchool("");
    setTitle("");
    setDate("");
  };

  // Define the function to handle edit button clicks
  const handleEdit = (index) => {
    // Set the input field values to the values of the item being edited
    setSchool(education[index].school);
    setTitle(education[index].title);
    setDate(education[index].date);
    // Set the component to edit mode
    setIsEditing(true);
    // Set the index of the item being edited
    setEditIndex(index);
  };

  // Define the function to handle the form submission when in edit mode
  const handleEducationEdit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Update the item in the education array
    const updatedEducation = [...education];
    updatedEducation[editIndex] = { school, title, date };
    setEducation(updatedEducation);
    // Exit edit mode
    setIsEditing(false);
  };

  // Define the function to handle delete button clicks
  const handleDelete = (index) => {
    // Create a copy of the education array
    const updatedEducation = [...education];
    // Remove the item from the copy of the array
    updatedEducation.splice(index, 1);
    // Set the education array to the updated copy
    setEducation(updatedEducation);
  };

  // Render the form to add new items or edit existing ones
  return (
    <div className="cv-section">
      {!isEditing && (
        <form onSubmit={handleSubmit}>
          <label>
            School:
            <input
              className="form-input"
              type="text"
              value={school}
              onChange={(event) => setSchool(event.target.value)}
            />
          </label>
          <label>
            Degree:
            <input
              className="form-input"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Dates Attended:
            <input
              className="form-input"
              type="text"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </label>
          <input className="form-button" type="submit" value="Submit" />
        </form>
      )}
      {education.map((item, index) => (
        <div key={index}>
          {!isEditing && (
            <>
              <p>School: {item.school}</p>
              <p>Title: {item.title}</p>
              <p>Dates Attended: {item.date}</p>
              <button
                className="form-button-secondary"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="form-button-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </>
          )}
          {isEditing && editIndex === index && (
            <form onSubmit={handleSubmit}>
              <label>
                School:
                <input
                  className="form-input"
                  type="text"
                  value={school}
                  onChange={(event) => setSchool(event.target.value)}
                />
              </label>
              <label>
                Degree:
                <input
                  className="form-input"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <label>
                Dates Attended:
                <input
                  className="form-input"
                  type="text"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </label>
              <input
                className="form-button-tertiary"
                type="submit"
                value="Save"
                onClick={handleEducationEdit}
              />
            </form>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;
