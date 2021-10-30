import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [isOpen, setIsOpen] = useState();

  function handleEditAvatarClick() {
    setIsOpen(true);
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsOpen(true);
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsOpen(true);
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard();
  }

  return (
    <div className="App">
      <Header />
      <Main
        isOpen={isOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        card={selectedCard}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
