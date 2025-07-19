import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from './ui/button'
import { BorderBeam } from './magicui/border-beam'
import { ArrowRight } from 'lucide-react'

export default function ProcessAlertButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          className="relative overflow-hidden"
          size="lg"
          variant="outline"
        >
          Continue to Processing <ArrowRight />
          <BorderBeam
            size={40}
            initialOffset={20}
            className="from-transparent via-yellow-500 to-transparent"
            transition={{
              type: 'tween',
              stiffness: 60,
              damping: 20,
            }}
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Go to the Process & Transfer section
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Okay</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
