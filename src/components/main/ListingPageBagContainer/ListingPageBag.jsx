import React from "react";
import Preloader from "../../Preloader/Preloader";
import "../../../styles/listingPageBag";

const ListingPageBag = (props) => {
  if (!props.page) {
    return <Preloader />;
  }
  return (
    <div class="listingPageBagBlock">
     <figure>
        <span>
          <img src={props.page.data[0].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[0].name}</figcaption>
        <a>{props.page.data[0].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[1].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[1].name}</figcaption>
        <a>{props.page.data[1].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[2].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[2].name}</figcaption>
        <a>{props.page.data[2].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[3].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[3].name}</figcaption>
        <a>{props.page.data[3].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[4].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[4].name}</figcaption>
        <a>{props.page.data[4].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[5].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[5].name}</figcaption>
        <a>{props.page.data[5].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[6].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[2].name}</figcaption>
        <a>{props.page.data[6].price}</a>
        <button>В корзину</button>
      </figure>
      <figure>
        <span>
          <img src={props.page.data[7].image} width="80" height="130" />
        </span>
        <figcaption>{props.page.data[7].name}</figcaption>
        <a>{props.page.data[7].price}</a>
        <button>В корзину</button>
      </figure>
    </div>
  );
};

export default ListingPageBag;
