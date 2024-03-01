'use client';

import Head from 'next/head';
import Script from 'next/script';

declare const NoFrixionPayElement: any;

export const NoFrixionPay = () => {
    const initializePayment = () => {
        const paymentRequestID = 'c95fa4df-bc2e-45e8-c611-08d9fccc58a3';
        const nfPayElement = new NoFrixionPayElement(
            paymentRequestID,
            'nf-payelement',
            'https://api-sandbox.nofrixion.com'
        );
        nfPayElement.load();
    };

    return (
        <>
            <Head>
                <Script
                    src="https://api-sandbox.nofrixion.com/js/payelement.js"
                    onLoad={initializePayment}
                />
            </Head>

            <div
                id="nf-payelement"
                style={{
                    border: 'none',
                    width: '350px',
                    height: '800px',
                }}></div>
        </>
    );
};
