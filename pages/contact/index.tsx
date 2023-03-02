import { Inter } from 'next/font/google'

import { MainLayout } from '@/components/layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact.js</code>
          </p>
        </div>
    </MainLayout>
  )
}

