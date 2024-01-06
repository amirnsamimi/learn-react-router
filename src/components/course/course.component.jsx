import React, { createElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import courseSlice, { selectCourse } from "../../redux/features/courseSlice";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NextButtonLink from "../../reusable-components/next-button-link.reusableComponent";
import { Button } from "@mui/material";

const Course = ({filterNewCourseState}) => {
  const courseContent = useSelector(selectCourse);
  const { lesson } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);
  const [componentEl, setComponentEl] = useState([]);

  

  useEffect(() => {
    setFilteredCourse(Object.values(courseContent[lesson]));
  }, []);

  
  useEffect(() => {
    setFilteredCourse(Object.values(courseContent[lesson]));
    setComponentEl([])
  }, [lesson]);

  useEffect(() => {
    
    filteredCourse.map((i, index) => {
      if (i.component == "ul") {
      setComponentEl((prev) => {
            return [
              ...prev,
              createElement(
                i.component,
                { className: i.className },
                i.children.map(ch=> createElement(ch.component,{className: ch.className}, ch.text))
                
              ),
            ];
          })
     
      } else if(i.component == "img"){

        setComponentEl((prev) => {
            return [
              ...prev,
              createElement(i.component, { className: i.className, src:i.link}),
            ];
          });




      }else {
        setComponentEl((prev) => {
          return [
            ...prev,
            createElement(i.component, { className: i.className }, i.text),
          ];
        });
      }
    });
  }, [filteredCourse]);

  return (
    <>
      {componentEl.map((i, index) => {
        return (
          <Grid2 key={index} xs={12} p={1} container className="persian-content">
            {i}
          </Grid2>
        );
      })}
   
     
    </>
  );
};

export default Course;
