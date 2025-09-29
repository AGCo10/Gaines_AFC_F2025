import React, { useState } from 'react' ;
import HiringPage from '../src/pages/Hiring' ;
import HiringForm from '../src/components/HiringForm.jsx' ;


function App () {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <>
        <div>
            <HiringPage onOpenModal={handleOpenModal} />
            <HiringForm isOpen={isModalOpen} onClose={handleCloseModal}>
                {/* You can pass additional content here if needed */}
            </HiringForm>
        </div>
        </>
    );
};

export default App;