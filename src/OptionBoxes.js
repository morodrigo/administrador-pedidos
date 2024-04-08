// OptionBoxes.js
import React from "react";
import "./OptionBox.css";
const customSvg1 = (
  <svg
    width="24"
    height="23"
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.5556 9.02941V3.47059C20.5556 2.10612 19.4611 1 18.1111 1H3.44444C2.09442 1 1 2.10612 1 3.47059V13.1381C1 14.5026 2.09442 15.6087 3.44445 15.6087H5.35749V20.7647L10.4589 15.6087H10.7778M17.0882 18.7775L20.2766 22V18.7775H20.5556C21.9056 18.7775 23 17.6714 23 16.3069V12.1176C23 10.7532 21.9056 9.64706 20.5556 9.64706H13.2222C11.8722 9.64706 10.7778 10.7532 10.7778 12.1176V16.3069C10.7778 17.6714 11.8722 18.7775 13.2222 18.7775H17.0882Z"
      stroke="#5F9EEB"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const customSvg2 = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.3656 1.6344L10.5911 14.4089M2.0435 7.99016L21.936 1.08869C23.161 0.66368 24.3363 1.83899 23.9113 3.06402L17.0098 22.9565C16.537 24.3193 14.6234 24.3566 14.0978 23.0134L10.939 14.9409C10.7812 14.5378 10.4622 14.2188 10.0591 14.061L1.98664 10.9022C0.643371 10.3766 0.680734 8.46296 2.0435 7.99016Z"
      stroke="#FF7A5E"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
const customSvg3 = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.25 9.25L11.3125 11.3125L16.125 6.5M14.9891 17.2609L12 23L9.25 17.2609H3.75C2.23122 17.2609 1 16.0297 1 14.5109V3.75C1 2.23122 2.23122 1 3.75 1H20.25C21.7688 1 23 2.23122 23 3.75V14.5109C23 16.0297 21.7688 17.2609 20.25 17.2609H14.9891Z"
      stroke="#43BD66"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const customSvg4 = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 17.5L17.5 8.5M9.19237 9.18668L9.17469 9.16881M16.8305 16.9034L16.8128 16.8855M7.90357 3.48416L6.63119 3.56165C4.97939 3.66225 3.66225 4.97939 3.56165 6.63119L3.48416 7.90357C3.43971 8.63346 3.15224 9.32746 2.66756 9.875L1.82265 10.8295C0.725784 12.0686 0.725784 13.9314 1.82265 15.1705L2.66757 16.125C3.15224 16.6725 3.43971 17.3665 3.48416 18.0964L3.56165 19.3688C3.66225 21.0206 4.97939 22.3378 6.63119 22.4384L7.90357 22.5158C8.63346 22.5603 9.32746 22.8478 9.875 23.3324L10.8295 24.1774C12.0686 25.2742 13.9314 25.2742 15.1705 24.1774L16.125 23.3324C16.6725 22.8478 17.3665 22.5603 18.0964 22.5158L19.3688 22.4384C21.0206 22.3378 22.3378 21.0206 22.4384 19.3688L22.5158 18.0964C22.5603 17.3665 22.8478 16.6725 23.3324 16.125L24.1774 15.1705C25.2742 13.9314 25.2742 12.0686 24.1774 10.8295L23.3324 9.875C22.8478 9.32746 22.5603 8.63346 22.5158 7.90357L22.4384 6.63119C22.3378 4.97939 21.0206 3.66225 19.3688 3.56165L18.0964 3.48416C17.3665 3.43971 16.6725 3.15224 16.125 2.66756L15.1705 1.82265C13.9314 0.725784 12.0686 0.725784 10.8295 1.82265L9.875 2.66757C9.32746 3.15224 8.63346 3.43971 7.90357 3.48416Z"
      stroke="#B386FC"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);
const customSvg5 = (
  <svg
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6522 19C13.1739 17.918 17.3739 16.4033 22 19V2.77049M1 2.47541V19C2.52174 17.918 6.72174 16.4033 11.3478 19V3.06557M1 2.43378C2.52174 1.35182 6.72174 -0.162936 11.3478 2.43378M11.6522 2.43378C13.1739 1.35182 17.3739 -0.162936 22 2.43378"
      stroke="#FB68A5"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
function OptionBoxes() {
  return (
    <div className="container" id="listado-opciones">
      <div className="row m-1">
        <OptionBox
          svg={customSvg1}
          clase="sin-atender"
          title="Sin Atender"
          description="Nuevos clientes esperando"
          notifications="2"
        />
        <OptionBox
          svg={customSvg2}
          clase="en-proceso"
          title="En Proceso"
          description="Chats abiertos de clientes"
          notifications="1"
        />
        <OptionBox
          svg={customSvg3}
          clase="atendidos"
          title="Atendidos"
          description="Conversaciones finalizadas"
          notifications="0"
        />
        <OptionBox
          svg={customSvg4}
          clase="promos"
          title="Promos"
          description="Promociones y descuentos para clientes"
          notifications=""
        />
        <OptionBox
          svg={customSvg5}
          clase="tu-menu"
          title="Tu Menú"
          description="Crea y edita el menú de tu establecimiento"
          notifications=""
        />

        {/* Agrega aquí las otras opciones */}

        {/* Botón Cerrar Sesión */}
        <div class="mt-5 d-grid gap-2 col-8 mx-auto">
          <button
            className="btn btn-danger p-2 border-0"
            id="cerrar-sesion"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
function handleLogout(){

}
function OptionBox({ svg, clase, title, description, notifications }) {
  return (
    <div class={`card mb-2 border-0 ${clase}`}>
      <div className="row g-0 align-items-center">
        <div className="col-1 d-flex justify-content-center align-items-center">
          {svg}
        </div>
        <div class="col-9">
          <div class="card-body pe-1">
            <div className="d-flex align-items-center">
              <h5 className="card-title mb-0">{title}</h5>
              {notifications > 0 && (
                <span className="notification-badge ms-2">{notifications}</span>
              )}
            </div>
            <p class="card-text">{description}</p>
          </div>
        </div>
        <div className="col-1 d-flex justify-content-center align-items-center">
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.67462 1.77515L7.34924 7.44977L1.67462 13.1244"
              stroke="#1C1C1C"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}


export default OptionBoxes;
