import React, { useState } from 'react'
import AddBookmark from './AddBookmark';

const TopBar = () => {

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className='top-bar'>
      <p>Bookmarks</p>
      <button id='add-btn' onClick={() => (setShowAddModal(true)) }>Add</button>

      {showAddModal && (
        <div className='modal-overlay'>
          <div className='modal-box'>
            <AddBookmark />
            <button onClick={() => (setShowAddModal(false)) }>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TopBar
