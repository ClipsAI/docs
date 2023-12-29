// Next
import Image from 'next/image'

import ClipsAILogo from '@/images/logos/clipsai-blue.svg'

export function Logo({ className }: { className: string }) {
    return (
        <Image className={className} src={ClipsAILogo} alt="Clips AI Logo" />
    )
}
