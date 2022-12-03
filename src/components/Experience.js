import React, { useState } from "react";
import "../styles/main.css";

/* This component displays a form for the user to input their professional experience details.
It also shows the user's current experience entries, and provides the ability to edit or delete each entry.
The state is managed with React hooks, with separate state variables for each field in the form, as well as for
tracking whether the user is currently editing an entry, and which entry is being edited.
The component accepts the experience and setExperience props, which are used to store and update the user's experience details.
*/

function Experience({ experience, setExperience }) {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState("");
  const [date, setDate] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // When the form is submitted, a new experience entry is added to the list of experiences
  // or the currently edited entry is updated.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (editIndex === null) {
      setExperience([...experience, { company, title, tasks, date }]);
    } else {
      const updatedExperience = [...experience];
      updatedExperience[editIndex] = { company, title, tasks, date };
      setExperience(updatedExperience);
      setEditIndex(null);
    }
    setCompany("");
    setTitle("");
    setTasks("");
    setDate("");
  };

  // When the user clicks the "Edit" button for an entry, the form fields are populated with that entry's data
  // and the isEditing state variable is set to true.
  const handleEdit = (index) => {
    setCompany(experience[index].company);
    setTitle(experience[index].title);
    setTasks(experience[index].tasks);
    setDate(experience[index].date);
    setIsEditing(true);
    setEditIndex(index);
  };

  // When the user clicks the "Save" button for an edited entry, the edited entry is updated in the list of experiences
  // and the isEditing state variable is set to false.
  const handleExperienceEdit = (event) => {
    event.preventDefault();
    const updatedExperience = [...experience];
    updatedExperience[editIndex] = { company, title, tasks, date };
    setExperience(updatedExperience);
    setIsEditing(false);
  };

  // When the user clicks the "Delete" button for an entry, that entry is removed from the list of experiences.
  const handleDelete = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  // The form is only displayed when the user is not currently editing an entry.
  // Each experience entry is displayed with its details and Edit and Delete buttons.
  // If the user is currently editing an entry, the form fields are pre-populated with that entry's data.

  return (
    <div className="cv-section">
      {!isEditing && (
        <form onSubmit={handleSubmit}>
          <label>
            Company:
            <input
              className="form-input"
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>
          <label>
            Position:
            <input
              className="form-input"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Tasks:
            <input
              className="form-input"
              type="text"
              value={tasks}
              onChange={(event) => setTasks(event.target.value)}
            />
          </label>
          <label>
            Dates:
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
      {experience.map((item, index) => (
        <div key={index}>
          {!isEditing && (
            <>
              <p>Company: {item.company}</p>
              <p>Position: {item.position}</p>
              <p>Date: {item.dateFrom}</p>
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
                Company:
                <input
                  className="form-input"
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                />
              </label>
              <label>
                Title:
                <input
                  className="form-input"
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </label>
              <label>
                Dates:
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
                onClick={handleExperienceEdit}
              />
            </form>
          )}
        </div>
      ))}
    </div>
  );
}

export default Experience;
