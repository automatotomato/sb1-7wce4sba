import { useState, useEffect } from 'react';

const POPUP_DELAY = 2000; // 2 seconds
const POPUP_SHOWN_KEY = 'email_popup_shown';

const useEmailPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem(POPUP_SHOWN_KEY);
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    localStorage.setItem(POPUP_SHOWN_KEY, 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    // For now, we'll just close the popup
    closePopup();
  };

  return {
    isOpen,
    closePopup,
    handleSubmit,
  };
};

export default useEmailPopup;