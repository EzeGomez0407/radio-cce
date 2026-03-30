import { Button, Card } from "@heroui/react";

export default function Events() {
  return (
    <>
      <Card className="w-full items-stretch md:flex-row">
        <div className="overflow-hidden rounded-2xl h-[260px]">
          <img
            alt="Cherries"
            className="h-full w-full object-cover "
            loading="lazy"
            src="https://radio-cce.onrender.com/bg-welcome.jpg"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8 text-2xl">
              Domingos de alabanzas y adoración!
            </Card.Title>
            <Card.Description>
              Todos los domingos, la iglesia se reune para escuchar la palabra
              de nuestro Dios, alabarlo, adorarlo y glorificarlo. Te esperamos
              en casa, entre Av. 9 de Julio y Juan Ramón Vidal. No olvides tu
              biblia.
            </Card.Description>
          </Card.Header>
          <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                10:00AM
              </span>
              <span className="text-xs text-muted">
                {/* Submission ends Oct 10. */}
              </span>
            </div>
          </Card.Footer>
        </div>
      </Card>
    </>
  );
}
