import { Card, Chip } from "@heroui/react";

export default function CardEvents({event}){  
    return <Card
          key={event.id}
          className="w-full shrink-0 flex flex-col justify-center p-6 bg-white"
        >
          <Chip color={event.type == "especial" ? "success" : "warning"} className="absolute top-3 right-3 text-lg">
            {event.type}
          </Chip>
          <div className="overflow-hidden rounded-2xl h-75">
            <img
              alt="Cherries"
              className="h-full w-full object-cover "
              loading="lazy"
              src={
                event.data.image
                  ? event.data.image
                  : "https://radio-cce.onrender.com/bg-welcome.jpg"
              }
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <Card.Title className="pr-15 text-2xl">
                {event.data.title}
              </Card.Title>
              <Card.Description>{event.data.description}</Card.Description>
            </Card.Header>
            <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  Horario: {event.data.time ? event.data.time : "--"}
                </span>
                <span className="text-xs text-muted">Fecha: {event.data.date ? event.data.date : "--"}</span>
              </div>
            </Card.Footer>
          </div>
        </Card>
}