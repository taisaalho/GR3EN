<template>
    
        <v-app>
            
            <v-container>
                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Activity Actions
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-container>
                            <v-btn  to="/Admin/CreateActivity"> Create Activity</v-btn>
                        </v-container>
                        <v-container>
                            <v-btn to="/activities"> Activities</v-btn>
                        </v-container>
                        
                    </v-expansion-panel-text>
                    </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Occurrences Actions
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-container>
                            <v-btn to="/Admin/Ocurrences"> List Occurrences</v-btn>
                        </v-container>
                    </v-expansion-panel-text>
                    </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Badges Actions
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-container>
                            <v-btn  to="/Admin/CreateBadge"> Create Badge</v-btn>
                        </v-container>
                        <v-container>
                            <v-btn to="/Admin/Badges">List Badges</v-btn>
                        </v-container>
                        
                    </v-expansion-panel-text>
                    </v-expansion-panel>
                <v-expansion-panel>
                    <v-expansion-panel-title>
                        Titles Actions
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <v-container>
                            <v-btn  to="/Admin/CreateTitle"> Create Titles</v-btn>
                        </v-container>
                        <v-container>
                            <v-btn to="Admin/Titles">List Titles</v-btn>
                        </v-container>
                        
                    </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-col>
                   
                  
                   
                </v-col>
            </v-container>

        </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>