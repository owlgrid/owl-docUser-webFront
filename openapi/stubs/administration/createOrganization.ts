import { constants } from "@owlgrid-dev/constants";
import { generateName, generateId } from "@owlgrid-dev/generators";
import { db } from "../connectors/database";
import { AdministrationOrganizationsCreateRequest } from "@owlgrid-dev/types";

/**
 * Create an organization
 * @param objectToCreate object to create
 * @returns name of the created resource
 */
export const createOrganization = async (objectToCreate: AdministrationOrganizationsCreateRequest): Promise<{ name: string }> => {
    // Check that the user is authorized to do the action
    // TODO or on the gateway?

    // Generate organizations id
    const instanceId = generateId();

    // Run query to fetch database and assert type
    const data = await db.setDocument(constants.administration.organizations.collection_id, instanceId, objectToCreate);

    // Generate resource name
    const name = generateName(constants.administration.name, constants.administration.organizations.name, instanceId);

    // Return result
    return {
        name
    };
};