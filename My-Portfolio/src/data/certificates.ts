

// 1. IMPORT YOUR IMAGES HERE
import FrontEndWebImg from "../../assets/images/certificates/Front-End-Web.png";
import PythonImg from "../../assets/images/certificates/Python-for-Beginners.png";
import WebDesignImg from "../../assets/images/certificates/Web-Design-for-Beginners.png";
import JiraScrum from "../../assets/images/certificates/Coursera-jira-scrum.png"

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string; // Made this required so the UI always looks good
  link: string;
}

export const certificates: Certificate[] = [
  {
    title: "FrontEnd Web Development",
    issuer: "Google",
    date: "2024",
    image: FrontEndWebImg, 
    link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php", 
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2024",
    image: PythonImg,
    link: "", // Add your verification link here when you have it
  },
  {
    title: "Web Design for Beginners",
    issuer: "University of Moratuwa",
    date: "2024",
    image: WebDesignImg,
    link: "", // Add your verification link here when you have it
  },
  // --- Placeholders for the rest (Using FrontEndImg temporarily) ---
  {
    title: "How to create a Jira SCRUM project",
    issuer: "coursera",
    date: "2024",
    image: JiraScrum,
    link: "https://www.coursera.org/account/accomplishments/verify/4FKXLN767XUL",
  },
//   {
//     title: "Meta Front-End Developer",
//     issuer: "Meta",
//     date: "2023",
//     image: "", // TODO: Replace with actual Meta image
//     link: "",
//   },
//   {
//     title: "React Developer Certification",
//     issuer: "Coursera",
//     date: "2023",
//     image: "", // TODO: Replace with actual Coursera image
//     link: "",
//   },
];