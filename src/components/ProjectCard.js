import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {imgUrl && <img src={imgUrl} alt={`Project: ${title}`} />}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
