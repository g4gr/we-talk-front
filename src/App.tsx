import { useModalView } from "./hooks/auth/useModalView";
import { RegisterModal } from "./components/auth/RegisterModal";
import { LoginModal } from "./components/auth/LoginModal";
import { WelcomeLeft } from "./components/auth/WelcomeLeft";
import { WelcomeRight } from "./components/auth/WelcomeRight";
import "./styles/auth/login.css";
import "./styles/auth/loginModals.css";

function App() {
  //Modals navigation (login and register forms)
  const {
    setShowLoginModal,
    setShowRegisterModal,
    showLoginModal,
    showRegisterModal,
    navigateToLogin,
    navigateToRegister,
  } = useModalView();

  //TODO (para terminar PARTE AUTH)
  //  - Revisar código + comentarios
  //  - Agregar logo Google a los botones correspondientes
  //  - Logout de google en useGoogle
  //  - Hashear password con Bcrypt
  //  - Setear state context de Loading + User

  return (
    <main className="welcome_main">
      {/* LEFT SIDE */}
      <WelcomeLeft />
      {/* RIGHT SIDE */}
      <WelcomeRight
        setShowLoginModal={setShowLoginModal}
        setShowRegisterModal={setShowRegisterModal}
      />

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <LoginModal
          navigateToRegister={navigateToRegister}
          setShowLoginModal={setShowLoginModal}
        />
      )}
      {/* REGISTER MODAL */}
      {showRegisterModal && (
        <RegisterModal
          navigateToLogin={navigateToLogin}
          setShowRegisterModal={setShowRegisterModal}
        />
      )}
    </main>
  );
}

export default App;
