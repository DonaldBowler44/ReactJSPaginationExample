import React, { useState } from "react";
import data from './data';

export default function Home() {
  const [noOfElement, setnoOfElement] = useState(4);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };

  const slice = data.cardData.slice(0, noOfElement);
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        {slice.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <video 
                controls 
                autoPlay 
                poster="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZSUyMHRodW1ibmFpbHxlbnwwfHwwfHw%3D&w=1000&q=80"
                src={item.video} />
                <div className="card-img-overlay">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn btn-dark d-block w-100" onClick={() => loadMore()}>
        Load More
      </button>
    </section>
  );
}