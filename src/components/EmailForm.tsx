'use client'

import { useState, KeyboardEvent, ChangeEvent } from 'react'
//import { addDoc, collection } from '@/utils/firebase'
//import { db } from '@/utils/firebase'

interface EmailFormProps {
  onAlert: (message: string) => void;
}

export default function EmailForm({ onAlert }: EmailFormProps) {
    const [email, setEmail] = useState<string>('')
    const [isValid, setIsValid] = useState<boolean>(false)
  
    const validateEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      setIsValid(emailRegex.test(value))
    }
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
      validateEmail(e.target.value)
    }
  
    // const handleSubmit = async () => {
    //   try {
    //     await addDoc(collection(db, "emailsForNewsLetter"), {
    //       email,
    //       timestamp: new Date(),
    //       active: true
    //     })
    //     onAlert("Thanks for Subscribing to SiliconXHacks Newsletter")
    //     setEmail('')
    //     setIsValid(false)
    //   } catch (error) {
    //     if (error instanceof Error) {
    //       onAlert(`Error adding email: ${error.message}`)
    //     } else {
    //       onAlert('An unknown error occurred')
    //     }
    //   }
    // }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && isValid) {
          //handleSubmit()
        }
      }
    
      return (
        <div className="input">
          <input
            type="text"
            value={email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter your email to stay updated"
          />
          <button 
            className="submit-btn"
            disabled={!isValid}
            //onClick={handleSubmit}
          >
            ➞
          </button>
        </div>
      )
    }
    