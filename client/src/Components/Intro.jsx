import React from "react";
import Card from "react-bootstrap/Card";
import { icons } from "./Sectors";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Intro = () => {
  const { id } = useParams();
  return (
    <>
      <div className="about">
        <h2>What Are We?</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          mollitia tempore nostrum porro. Fuga, quibusdam repudiandae est
          obcaecati molestias dicta harum rerum iure aspernatur alias sed ipsam
          dolorum fugiat veritatis voluptas nostrum commodi. Assumenda ad enim
          ipsa quisquam reprehenderit dolor fugit aliquam amet veniam quo velit
          tempora temporibus voluptatibus atque, fugiat reiciendis voluptates!
          Voluptates tempora id perferendis. Laboriosam amet, necessitatibus
          aliquam quaerat voluptate beatae cupiditate ducimus omnis tempore
          libero vel repudiandae accusantium? Quas ullam animi tempore odit
          repellat suscipit quo sapiente eius corporis nostrum odio, iure
          quisquam, magnam alias beatae voluptatem mollitia natus voluptate enim
          et eaque officia aut. Soluta.
        </p>
      </div>
      <div className="share">
        <Link className=" mx-2" to={`/services/${id}`}>
          Share your problem
        </Link>
      </div>
      <div className="sectors-info">
        <h2>What Sectors we target?</h2>
        <div className="cards">
          {icons.map((value, key) => {
            return (
              <Card className="card">
                <div className="imageicon" key={key}>
                  <h1 className="icon-img">{value.icon}</h1>
                  <Card.Title className="paragraph">
                    {" "}
                    {value.sector}{" "}
                  </Card.Title>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Intro;
