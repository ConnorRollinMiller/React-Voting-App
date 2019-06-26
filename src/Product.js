import React from 'react';

const Product = (props) => {

   const handleUpVote = () => {

      props.handleProductUpVote(props.id);

   }

   return (
      <article className="card border-0 mb-4 col-8 mx-auto">
         <div className="row">
            <div>
               <img className="img-fluid rounded" width="200" src={ props.productImageUrl } alt={ props.title } />
            </div>
            <div className="col-8">
               <div className="d-flex align-items-center mb-3">
                  <span
                     className="h5 mb-0 mr-2 icon"
                     role="img"
                     aria-label="up vote emoji"
                     onClick={ handleUpVote }
                  >
                     🔼
                        </span>
                  <h3 className="mb-0">{ props.votes }</h3>
               </div>
               <div className="mb-3">
                  <h2 className="h4 mb-0">{ props.title }</h2>
                  <p>{ props.description }</p>
               </div>
               <div className="d-flex align-items-center">
                  <p className="text-muted mr-2 mb-0">Submitted By:</p>
                  <img className="img-fluid rounded-circle" width="50" height="50" src={ props.submitterAvatarUrl } alt="Submitter" />
               </div>
            </div>
         </div>
      </article>
   );
}

export default Product;