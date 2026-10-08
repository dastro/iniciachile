import { whatsappUrl } from '@/app/data/site'
import Icon from '@/app/components/ui/icons'

/** Botón flotante de WhatsApp, presente en todas las páginas. */
export const WhatsappButton = () => (
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Escribir por WhatsApp"
    className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 md:bottom-7 md:right-7"
  >
    <Icon name="whatsapp" className="h-8 w-8" />
  </a>
)

export default WhatsappButton
