import React from 'react'
import AccessDenied from '../../components/UI/AccessDenied'
export default function page() {
    const images = {
        
    }
    if (session && session.user.email === "augustan506@gmail.com") {
        <div>
            
        </div>
    }
    else {
		return (
			<AccessDenied />
		);
	}
}
