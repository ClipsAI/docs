// Next
import Image from 'next/image'
import { useTheme } from 'next-themes'

// Images
import CAILightLogo from '@/images/logos/clipsai.svg'
import CAIDarkLogo from '@/images/logos/clipsai-blue.svg'

export function Logo({ className }: { className: string }) {
    let { resolvedTheme } = useTheme()
    let CAILogo = resolvedTheme === 'dark' ? CAIDarkLogo : CAILightLogo
    return (
        <Image className={className} src={CAILogo} alt="Clips AI Logo" />
    )
}
