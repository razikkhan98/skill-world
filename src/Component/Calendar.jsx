import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "./Common/Header";
import Navbar from "./Common/Navbar";
import Footer from "./Common/Footer";
// import { makeStyles } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
//   calendar: {
//     height: "100%",
//     "& .fc-daygrid-container, & .fc-timegrid-container": {
//       overflow: "hidden",
//     },
//     "& .fc-daygrid-view, & .fc-timegrid-view": {
//       borderColor: theme.palette.divider,
//     },
//     "& .fc-daygrid-event, & .fc-timegrid-event": {
//       backgroundColor: theme.palette.secondary.main,
//       color: theme.palette.secondary.contrastText,
//       borderColor: theme.palette.secondary.main,
//       borderRadius: theme.shape.borderRadius,
//       padding: theme.spacing(0.5, 1),
//       fontSize: theme.typography.body2.fontSize,
//       boxShadow: theme.shadows[1],
//     },
//     "& .fc-daygrid-event:hover, & .fc-timegrid-event:hover": {
//       backgroundColor: theme.palette.secondary.dark,
//       borderColor: theme.palette.secondary.dark,
//       cursor: "pointer",
//     },
//   },
// }));
function Calendar() {
  // const classes = useStyles();

  return (
    <div>
      <div class="content-wrapper">
        <div class="container-fluid">
          <Navbar />
          <Header />
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            height="auto"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={[
              {
                title: "Event 1",
                start: "2023-05-08T10:00:00",
                end: "2023-05-08T12:00:00",
              },
              {
                title: "Event 2",
                start: "2023-05-10T14:30:00",
                end: "2023-05-10T16:30:00",
              },
              {
                title: "Event 3",
                start: "2023-05-12T17:00:00",
                end: "2023-05-12T18:00:00",
              },
            ]}
            eventClick={(event) => console.log(event)}
            // className={classes.calendar}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
