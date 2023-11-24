import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;
  const [activeSectionKey, setActiveSectionkey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInformation, setActiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          defaultValue={values.title}
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>
      <div className={styles.column}>
        <label>Enter Work Description</label>
        <InputControl placeholder="Line1" />
        <InputControl placeholder="Line3" />
        <InputControl placeholder="Line3" />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. Chat app" />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. B-tech" />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
        />
      </div>
    </div>
  );
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" placeholder="Enter your email" />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <InputControl label="Other" placeholder="Enter something" />
    </div>
  );
  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };
  useEffect(() => {
    setActiveInformation(information[sections[activeSectionKey]]);
    setSectionTitle(sections[activeSectionKey]);
  }, [activeSectionKey]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionkey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl
          label="Title"
          placeholder="Enter Section Title"
          value={sectionTitle}
          onChange={(event) => setSectionTitle(event.target.value)}
        />

        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div className={styles.chip} key={item.title + index}>
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X />
                </div>
              ))
            : ""}
        </div>
        {generateBody()}
        <button>Save</button>
      </div>
    </div>
  );
}

export default Editor;
