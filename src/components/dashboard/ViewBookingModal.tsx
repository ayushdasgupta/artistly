"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type Props = {
    artistId: string
    artistName: string
    open: boolean
    onClose: () => void
    onBookingCleared: () => void
}

export function ViewBookingModal({
    artistId,
    artistName,
    open,
    onClose,
    onBookingCleared,
}: Props) {
    const [booking, setBooking] = useState<null | { name: string; email: string; message: string }>(null)

    useEffect(() => {
        if (open) {
            const data = localStorage.getItem(`artistly-booked-${artistId}`)
            if (data) setBooking(JSON.parse(data))
        }
    }, [open, artistId])

    const handleDecision = (approved: boolean) => {
        localStorage.removeItem(`artistly-booked-${artistId}`)
        setBooking(null)
        onBookingCleared()
        toast.success(
            approved
                ? `Approved booking for ${artistName}`
                : `Declined booking for ${artistName}`
        )
        onClose()
    }

    if (!booking) return null

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Booking Details for {artistName}</DialogTitle>
                </DialogHeader>

                <div className="space-y-2 mt-2 text-sm">
                    <p><strong>Name:</strong> {booking.name}</p>
                    <p><strong>Email:</strong> {booking.email}</p>
                    <p><strong>Message:</strong> {booking.message}</p>
                </div>
                <div className="flex gap-2.5 flex-col-reverse">
                    <Button
                        variant="destructive"
                        className="w-full"
                        onClick={() => handleDecision(false)}
                    >
                        Decline
                    </Button>
                    <Button
                        variant="default"
                        className="w-full"
                        onClick={() => handleDecision(true)}
                    >
                        Approve
                    </Button>
                </div>


            </DialogContent>
        </Dialog>
    )
}
