import { cn } from "@/lib/utils"

interface MaxwidthWrapperProps {
    children: React.ReactNode
    className?: string
}

const MaxwidthWrapper = ({ children, className }: MaxwidthWrapperProps) => {
    return (
        <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}

export default MaxwidthWrapper