"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { sharedTruck } from "@/lib/mock-data"
import { farmer } from "@/lib/mock-data"

export function ConfirmationModal({
  open,
  onOpenChange,
  onConfirm,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Confirm Shared Pickup?</DialogTitle>
          <DialogDescription>
            Review the details below before confirming your shared truck pickup.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 rounded-xl bg-muted p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Crop</span>
            <span className="font-medium text-foreground">
              {farmer.primaryCrop} — {sharedTruck.yourProduceKg} kg
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Destination</span>
            <span className="font-medium text-foreground">{sharedTruck.destination}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Pickup</span>
            <span className="font-medium text-foreground">24 Aug &middot; 7:00 AM</span>
          </div>
          <div className="h-px bg-border" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Your cost</span>
            <span className="font-semibold text-foreground">₹{sharedTruck.yourShare.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Savings</span>
            <span className="font-semibold text-primary">
              ₹{(sharedTruck.withoutPooling - sharedTruck.yourShare).toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <DialogFooter className="sm:flex-col sm:gap-2">
          <Button onClick={onConfirm} className="w-full">
            Confirm Pickup
          </Button>
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="w-full">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
