import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const MyComponent = () => {
    // Lógica del componente
    const router = useRouter();
    return (
        <div>
            {/* Se muestra el slug */}
            <h1>{router.query.slug}</h1>
            
        </div>
    );
};

export default MyComponent;