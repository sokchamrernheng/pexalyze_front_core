import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Spinner } from "@/components/ui/spinner";
import { TenantService } from "@/services/tenant.service";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { BadgeCheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_app/home")({
  component: RouteComponent,
});

function RouteComponent() {
  const [tenants, setTenants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTenants = async () => {
      try {
        const data = await TenantService.listTenants();
        console.log(data);
        setTenants(data);
      } finally {
        setLoading(false);
      }
    };

    loadTenants();
  }, []);
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Select Tenants</CardTitle>
          <CardDescription>
            Select tenant to proceed, or create one
          </CardDescription>
          <CardContent>
            {tenants.map((t) => (
              <Item variant="outline" key={t.id} className="my-4">
                <ItemMedia>
                  <BadgeCheckIcon className="size-5" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{t.name}</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      // optionally store selected tenant
                      // setActiveTenant(t.id)

                      // navigate
                      navigate({ to: "/overview", replace: true });
                    }}
                  >
                    Select
                  </Button>
                </ItemActions>
              </Item>
            ))}
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
}
