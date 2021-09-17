import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelopeSquare, faPencilAlt} from '@fortawesome/free-solid-svg-icons'


function Form() {
    
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const envelopeIcon = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const pencilIcon = <FontAwesomeIcon icon={faPencilAlt} />

    return (
        <div className='form'>
            <form className="formSheet">
                <div class="input">
                    <input type="text" className="name" name="Name" required />
                    <label for="name">{userIcon}Name</label>
                </div>
                <div class="input">
                    <input type="text" className="number" name="Phone Number" required />
                    <label for="number">{phoneIcon}Phone Number</label>
                </div>
                <div class="input">
                    <input type="email" className="email" name="E-mail" required />
                    <label for="email">{envelopeIcon}E-mail</label>
                </div>
                <div class="input">
                    <textarea className="message" rows="8" name="Message" required></textarea>
                    <label for="message">{pencilIcon}Message</label>
                </div>
                <button type="submit" className="formButton">Submit</button>
            </form>
        </div>
    )
}

export default Form